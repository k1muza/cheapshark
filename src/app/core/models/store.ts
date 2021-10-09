export interface StoreImages {
    banner?: string;
    logo?: string;
    icon?: string;
}

export interface Store {
    storeID: string;
    storeName?: string;
    isActive?: number;
    images?: StoreImages;
}