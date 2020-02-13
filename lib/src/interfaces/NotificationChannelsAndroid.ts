
export interface NotificationChannelAndroid {
  id: string;
  name: string;
  importance: ChannelImportance;
  description: string;
}

export enum ChannelImportance {
  IMPORTANCE_UNSPECIFIED = -1000,
  IMPORTANCE_NONE = 0,
  IMPORTANCE_MIN = 1,
  IMPORTANCE_LOW = 2,
  IMPORTANCE_DEFAULT = 3,
  IMPORTANCE_HIGH = 4,
  IMPORTANCE_MAX = 5,
}
