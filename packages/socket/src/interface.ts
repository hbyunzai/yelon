export interface Message {
  title?: string;
  content?: string;
  href?: string;
  type?: string;
}

export interface MessageWithIcon extends Message {
  icon?: string;
}

export interface MessageWithUser extends Message {
  useruri?: string;
}
