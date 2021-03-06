import { IMediaQuery } from '../src/lib/IDeviceStateConfig';
/**
 * Object with available media queries
 */
export const mediaQueries:IMediaQuery = {
	X_SMALL: '(max-width: 479px)',
	SMALL: '(min-width: 480px)',
	MEDIUM: '(min-width: 768px)',
	LARGE: '(min-width: 1024px)',
	MEDIUM_ISOLATE: '(min-width: 768px) and (max-width: 1023px)',
};

export const maxWidthMediaQueries:IMediaQuery = {
	X_SMALL: '(max-width: 321px)',
	SMALL: '(max-width: 480px)',
	MEDIUM: '(max-width: 768px)',
	LARGE: '(max-width: 1024px)',
};

/**
 * This enum is used by the DeviceStateTracker class to determine which of the media queries in
 * the mediaQueries object above are considered 'device states'. Names of this enum have to
 * correspond with one of the keys in the mediaQueries object. When using the DeviceStateTracker,
 * make sure you have enough device states so that there will always be one with a matching media query.
 */
export enum DeviceState {
	X_SMALL,
	SMALL,
	MEDIUM,
	LARGE,
}

export enum WrongDeviceState {
	X_SMALL = 0,
	SMALL = 1,
	MEDIUM = 2,
	LARGE = 4,
}
