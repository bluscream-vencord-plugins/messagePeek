import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    fetchUncached: {
        type: OptionType.BOOLEAN,
        description: "Fetch the last message for DMs on startup if not cached. This will cause network requests and may be logged.",
        default: true,
        restartNeeded: false,
    }
});
