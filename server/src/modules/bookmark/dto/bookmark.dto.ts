export class CreateBookmarkDto {
  title: string | null;
  url: string;
  folderId: number;
  order: number;
}
export class UpdateBookmarkDto {
  title: string | null;
  url: string | null;
  folderId: number | null;
  order: number | null;
}
