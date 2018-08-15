import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
// key that is used to access the data in local storage
const STORAGE_KEY = 'local_pwa-news';

@Injectable()
export class LocalStorageService {
    anotherList = [];

    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {

    }

    public storeOnLocalStorage(userId: string): void {
        //get array of tasks from local storage
        const currentList = this.storage.get(STORAGE_KEY) || [];
        // push new task to array
        currentList.push({ userId: userId });
        // insert updated array to local storage
        this.storage.set(STORAGE_KEY, currentList);
        console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    }

    public getFromLocalStorage(userId: string): string {
        //get array of tasks from local storage
        const currentList = this.storage.get(STORAGE_KEY) || [];
        if (currentList){
            return currentList.userId;
        }
        return "";
    }
}
