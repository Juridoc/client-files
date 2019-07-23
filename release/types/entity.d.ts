/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Folders from '@juridoc/client-folders';
import * as Types from './types';
/**
 * File entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * File Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Folder Id.
     */
    folderId?: string;
    /**
     * Folder entity.
     */
    folder?: Folders.Entity;
    /**
     * List of sharing grants.
     */
    grantsIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * File disposition.
     */
    disposition: Types.Disposition;
    /**
     * MIME type.
     */
    mime: string;
    /**
     * File name.
     */
    name: string;
    /**
     * File data.
     */
    data: string;
}
