/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Folders from '@juridoc/client-folders';

import * as Types from './types';

/**
 * File entity class.
 */
@RestDB.Schema.Entity('files')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * File Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Folder Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public folderId?: string;

  /**
   * Folder entity.
   */
  @RestDB.Schema.Object(() => Folders.Entity, ['name'])
  @Class.Public()
  public folder?: Folders.Entity;

  /**
   * List of sharing grants.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public grantsIdList!: string[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * File disposition.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Disposition))
  @Class.Public()
  public disposition!: Types.Disposition;

  /**
   * MIME type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public mime!: string;

  /**
   * File name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * File data.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Binary()
  @Class.Public()
  public data!: string;
}
