export interface Thread {
  id: number;
  messageIds: number[];
  // participants in form of { participantId: unreadMessagesCount }
  participants: { [key: number]: number };
}
