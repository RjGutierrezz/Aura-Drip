import { supabase } from "./supabase";

// upload function
// defines a reusable helper that takes a selected image file and eventually
// returns the uploaded files public URL
export async function uploadClothingImage(file: File): Promise<string> {
	const fileExt = file.name.split(".").pop()?.toLowerCase() || "jpg";

	// create a unique file name to prevent file collisions
	const fileName = `${Date.now()}-${crypto.randomUUID()}.${fileExt}`;

	// choose a storage path
	const filePath = `uploads/${fileName}`;

	// upload the file to the bucket
	const { error: uploadError } = await supabase.storage
		.from("clothing-images")
		.upload(filePath, file, {
			cacheControl: "3600",
			upsert: false,
		});

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  // ask supabase for public URL for the uploaded file
  const { data } =
    supabase.storage.from("clothing-images").getPublicUrl(filePath);

  return data.publicUrl
}
