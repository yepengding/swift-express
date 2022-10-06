import {getAppDataSource} from "../db";
import {User} from '../models/entities/User';

/**
 * User Repository
 *
 * @author Yepeng Ding
 */
export const getUserRepository = async () => {
    const dataSource = await getAppDataSource();
    return dataSource.getRepository(User).extend({});
}
