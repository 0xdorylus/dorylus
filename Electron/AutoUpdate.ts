import { dialog, app } from 'electron';
import { autoUpdater, UpdateInfo } from 'electron-updater';

export default () => {
    if (app.isPackaged) {
        autoUpdater.autoInstallOnAppQuit = true;
        autoUpdater.checkForUpdates();
        autoUpdater.addListener('update-downloaded', (info: UpdateInfo) => {
            dialog
                .showMessageBox({
                    title: 'Restart Dorylus Client?',
                    type: 'question',
                    message: `New version "Dorylus Client ${info.version}" has been successfully downloaded.`,
                    buttons: ['Yes', 'Later', 'Yes, Update'],
                    cancelId: 1,
                })
                .then(({ response }) => {
                    if (response == 0 || response == 2) {
                        autoUpdater.quitAndInstall();
                    }
                });
        });
    }
};
