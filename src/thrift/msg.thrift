namespace js serializers.thrift.media

struct Media {
  1: string uri,             //url to the thumbnail
  2: optional string title,
  3: required i32 width,
  4: required i32 height,
  5: required string format,
  6: required i64 duration,
  7: required i64 size,
  8: optional i32 bitrate,
  9: required list<string> person,
  10: required Player player,
  11: optional string copyright,
}

enum Size {
  SMALL = 0,
  LARGE = 1,
}

enum Player {
  JAVA = 0,
  FLASH = 1,
}

struct Response {
  1: required i32 code,
  2: required bool success,
  3: required string message,
}

service UploadMedia {
  Response Upload (1: Media media)
}
