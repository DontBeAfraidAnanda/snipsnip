import { NewFolder } from "@/app/lib/types/dataTypes";

const API_URL = "http://localhost:8000";

export const fetchFolders = async () => {
  const response = await fetch(`${API_URL}/folders`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const addFolder = async (newFolder: NewFolder) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`${API_URL}/folders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFolder),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const deleteFolder = async (folderId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`${API_URL}/folders/${folderId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const fetchBookmarks = async (folderId: number) => {
  const response = await fetch(`${API_URL}/bookmarks/${folderId}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
