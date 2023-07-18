import {HeaderType} from 'app';
import {instance} from 'common/constants';

export const setHeaders = (headers: HeaderType) => {
	instance.setHeaders(headers);
};
