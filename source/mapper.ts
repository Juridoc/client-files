/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Files mapper class.
 */
@Injection.Describe({ singleton: true, name: 'files' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Create a new file based on the specified creation request.
   * @param request File creation request.
   * @returns Returns a promise to get the file Id.
   * @throws Throws an error when the file wasn't created.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    return (await this.mapper.insertEx<Requests.Create, string>(Requests.Create, request))!;
  }

  /**
   * Load the file that corresponds to the specified file Id.
   * @param id File Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the file entity.
   * @throws Throws an error when the file wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Update the file that corresponds to the specified file Id based on the given update request.
   * @param id File Id.
   * @param request File update request.
   * @returns Returns a promise to get true when the file was updated, false otherwise.
   */
  @Class.Public()
  public async modify(id: string, request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, id, request))!;
  }

  /**
   * List all files that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the file list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all files that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of files or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }

  /**
   * Delete the file that corresponds to the specified file Id.
   * @param id File Id.
   * @returns Returns a promise to get true when the file was deleted, false otherwise.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean> {
    return (await this.mapper.deleteById(id))!;
  }
}
