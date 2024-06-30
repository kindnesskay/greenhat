// create class to manage saving items with only one paremiters

import { TaskInterface } from "@/interfaces/task.interface";
interface dabaseInterface {
  total: number;
  data: TaskInterface[];
}
export default class DatabaseManager {
  private databaseName: string = "";
  private databaseJson: dabaseInterface | null = null;
  private totalItems: number = 0;
  private items: TaskInterface[] | null = null;
  constructor(name: string) {
    this.databaseName = name;
  }

  update(): boolean {
    let data = localStorage.getItem(this.databaseName);
    if (!data) return false;
    this.databaseJson = JSON.parse(data);
    if (!this.databaseJson) return false;
    this.items = this.databaseJson.data;
    this.totalItems = this.databaseJson.total;
    return true;
  }

  getData(id: string): null | TaskInterface {
    // get data by
    this.update();
    if (!this.items) return null;
    return this.items.filter((item) => {
      return item.id !== id;
    })[0];
  }

  getAllData(): null | TaskInterface[] {
    this.update();
    if (!this.items) return null;
    return this.items;
  }
  getTotal(): number {
    return this.totalItems;
  }
  remove(id: string) {
    this.update();
    if (!this.items) return false;
    this.items = this.items.filter((item) => item.id != id);
    this.totalItems--;
    this.saveToDb();
    return `items with id '${id}' removed`;
  }

  private saveToDb() {
    const data = {
      data: this.items,
      total: this.totalItems,
    };
    localStorage.setItem(this.databaseName, JSON.stringify(data));
  }
  save(data: TaskInterface): false | string {
    let saveObject: boolean = false;
    try {
      this.update();
      if (!data) return false;
      if (!this.items) {
        this.items = [data];
        this.totalItems = 1;
        saveObject = true;
        return "new database";
      }

      this.items = [...this.items, data];
      this.totalItems++;
      saveObject = true;
      return "new data saved";
    } catch (error: any) {
      saveObject = false;
      return error.code;
    } finally {
      if (saveObject) {
        this.saveToDb();
      }
    }
  }
}
