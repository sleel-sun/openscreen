export const TIMEOUT_HANGING_VIDEO_CAPTURE_STARTS = "TimeoutHangingVideoCaptureStarts";
export const MAC_CATAP_LOOPBACK_AUDIO_FOR_SCREEN_SHARE = "MacCatapLoopbackAudioForScreenShare";

export function formatChromiumFeatureList(features: string[]) {
	return Array.from(new Set(features.map((feature) => feature.trim()).filter(Boolean))).join(",");
}

export function getDisabledChromiumFeatures(platform: NodeJS.Platform) {
	const features = [TIMEOUT_HANGING_VIDEO_CAPTURE_STARTS];

	if (platform === "darwin") {
		features.push(MAC_CATAP_LOOPBACK_AUDIO_FOR_SCREEN_SHARE);
	}

	return features;
}
