/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * File creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Folder Id.
     */
    folderId?: string;
    /**
     * List of sharing grants.
     */
    grantsIdList?: string[];
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
    data: Array<number>;
}
