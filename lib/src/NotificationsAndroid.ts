import { Commands } from './commands/Commands';
import { Platform } from 'react-native';
import { ChannelImportance } from './interfaces/NotificationChannelsAndroid';

export class NotificationsAndroid {
  constructor(private readonly commands: Commands) {
    return new Proxy(this, {
      get(target, name) {
        if (Platform.OS === 'android') {
          return (target as any)[name];
        } else {
          return () => {};
        }
      }
    });
  }

  /**
  * Refresh FCM token
  */
  public registerRemoteNotifications() {
    this.commands.refreshToken();
  }

  public createChannel(id: string, name: string, importance: ChannelImportance, description?: string): Promise<boolean> {
    return this.commands.createChannel(id, name, importance, description);
  }
}
