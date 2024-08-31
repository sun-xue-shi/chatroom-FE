export interface AddFriendModalProps {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  handleClose: Function;
}

export interface AddFriend {
  userName: string;
  sayHello: string;
}
