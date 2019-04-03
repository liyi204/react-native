import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";

class  GoogleAnalyticsTools {
    static gaTrackerInstanse = null;

    static getGaTrackerInstanse() {
        if(!this.gaTrackerInstanse) {
            this.gaTrackerInstanse = new GoogleAnalyticsTracker("UA-136337964-2");//俊杰的
            this.gaTrackerInstanse.setAppName("TESTDEMO");
        }
        return this.gaTrackerInstanse;
    }
}

export default GoogleAnalyticsTools.getGaTrackerInstanse();