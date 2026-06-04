import { describe, expect, it } from "vitest";
import {
	formatChromiumFeatureList,
	getDisabledChromiumFeatures,
	MAC_CATAP_LOOPBACK_AUDIO_FOR_SCREEN_SHARE,
	TIMEOUT_HANGING_VIDEO_CAPTURE_STARTS,
} from "./chromiumFeatures";

describe("Chromium feature switches", () => {
	it("disables Chromium's hanging video capture start timeout on every platform", () => {
		expect(getDisabledChromiumFeatures("darwin")).toContain(TIMEOUT_HANGING_VIDEO_CAPTURE_STARTS);
		expect(getDisabledChromiumFeatures("win32")).toContain(TIMEOUT_HANGING_VIDEO_CAPTURE_STARTS);
		expect(getDisabledChromiumFeatures("linux")).toContain(TIMEOUT_HANGING_VIDEO_CAPTURE_STARTS);
	});

	it("keeps the macOS CoreAudio tap workaround scoped to macOS", () => {
		expect(getDisabledChromiumFeatures("darwin")).toContain(
			MAC_CATAP_LOOPBACK_AUDIO_FOR_SCREEN_SHARE,
		);
		expect(getDisabledChromiumFeatures("win32")).not.toContain(
			MAC_CATAP_LOOPBACK_AUDIO_FOR_SCREEN_SHARE,
		);
		expect(getDisabledChromiumFeatures("linux")).not.toContain(
			MAC_CATAP_LOOPBACK_AUDIO_FOR_SCREEN_SHARE,
		);
	});

	it("formats Chromium feature lists without duplicates or blanks", () => {
		expect(formatChromiumFeatureList(["A", " B ", "", "A"])).toBe("A,B");
	});
});
