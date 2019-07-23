/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * File creation request.
 */
@RestDB.Schema.Entity('files')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Folder Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public folderId?: string;

  /**
   * List of sharing grants.
   */
  @RestDB.Schema.Array(String)
  @Class.Public()
  public grantsIdList?: string[];

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
  public data!: Array<number>;
}
