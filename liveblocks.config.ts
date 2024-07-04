import { Layer, Color } from "@/types/canvas";
import {
  createClient,
  LiveList,
  LiveMap,
  LiveObject,
} from "@liveblocks/client";
import { createLiveblocksContext, createRoomContext } from "@liveblocks/react";

const client = createClient({
  throttle: 16,
  authEndpoint: "/api/liveblocks-auth",
});

// Presence represents the properties that exist on every user in the Room
// and that will automatically be kept in sync. Accessible through the
// `user.presence` property. Must be JSON-serializable.
type Presence = {
  cursor: { x: number; y: number } | null;
  selection: string[];
  pencilDraft: [x: number, y: number, pressure: number][] | null;
  penColor: Color | null;
  // ...
};

// Optionally, Storage represents the shared document that persists in the
// Room, even after all users leave. Fields under Storage typically are
// LiveList, LiveMap, LiveObject instances, for which updates are
// automatically persisted and synced to all connected clients.
type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

// Optionally, UserMeta represents static/readonly metadata on each user, as
// provided by your own custom auth back end (if used). Useful for data that
// will not change during a session, like a user's name or avatar.
type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};

// Optionally, the type of custom events broadcast and listened to in this
// room. Use a union for multiple events. Must be JSON-serializable.
type RoomEvent = {
  // type: "NOTIFICATION",
  // ...
};

// Optionally, when using Comments, ThreadMetadata represents metadata on
// each thread. Can only contain booleans, strings, and numbers.
export type ThreadMetadata = {
  // resolved: boolean;
  // quote: string;
  // time: number;
};

// Room-level hooks, use inside `RoomProvider`
export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersListener,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    // useObject,
    // useMap,
    // useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
    useThreadSubscription,
    useMarkThreadAsRead,
    useRoomNotificationSettings,
    useUpdateRoomNotificationSettings,

    // These hooks can be exported from either context
    // useUser,
    // useRoomInfo
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client
);

// Project-level hooks, use inside `LiveblocksProvider`
export const {
  suspense: {
    LiveblocksProvider,
    useMarkInboxNotificationAsRead,
    useMarkAllInboxNotificationsAsRead,
    useInboxNotifications,
    useUnreadInboxNotificationsCount,

    // These hooks can be exported from either context
    useUser,
    useRoomInfo,
  },
} = createLiveblocksContext<UserMeta, ThreadMetadata>(client);

/////////////////////////////////////////////////////////////////////////
///////---------------------------------------------------------------/////
//////////--------------------------------------////////////////////////////

// // Define Liveblocks types for your application
// // https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data
// declare global {
//   interface Liveblocks {
//     // Each user's Presence, for useMyPresence, useOthers, etc.
//     Presence: {
//       // Example, real-time cursor coordinates
//       // cursor: { x: number; y: number };
//     };

//     // The Storage tree for the room, for useMutation, useStorage, etc.
//     Storage: {
//       // Example, a conflict-free list
//       // animals: LiveList<string>;
//     };

//     // Custom user info set when authenticating with a secret key
//     UserMeta: {
//       id: string;
//       info: {
//         // Example properties, for useSelf, useUser, useOthers, etc.
//         // name: string;
//         // avatar: string;
//       };
//     };

//     // Custom events, for useBroadcastEvent, useEventListener
//     RoomEvent: {};
//       // Example has two events, using a union
//       // | { type: "PLAY" }
//       // | { type: "REACTION"; emoji: "🔥" };

//     // Custom metadata set on threads, for useThreads, useCreateThread, etc.
//     ThreadMetadata: {
//       // Example, attaching coordinates to a thread
//       // x: number;
//       // y: number;
//     };

//     // Custom room info set with resolveRoomsInfo, for useRoomInfo
//     RoomInfo: {
//       // Example, rooms with a title and url
//       // title: string;
//       // url: string;
//     };
//   }
// }

// export {};
