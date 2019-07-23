/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Files mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new file based on the specified creation request.
     * @param request File creation request.
     * @returns Returns a promise to get the file Id.
     * @throws Throws an error when the file wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the file that corresponds to the specified file Id.
     * @param id File Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the file entity.
     * @throws Throws an error when the file wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the file that corresponds to the specified file Id based on the given update request.
     * @param id File Id.
     * @param request File update request.
     * @returns Returns a promise to get true when the file was updated, false otherwise.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * List all files that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the file list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all files that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of files or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the file that corresponds to the specified file Id.
     * @param id File Id.
     * @returns Returns a promise to get true when the file was deleted, false otherwise.
     */
    remove(id: string): Promise<boolean>;
}
