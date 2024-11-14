import router from '@system.router'
export default {
    data: {
        dataWrapper: {
            mode: "",
            time: "00:00",
            repeat: "不重复",
            switchStatus:false,
            alarmItemIndex: -1
        },
        originData:[]
    },
    onInit() {

    },
    setTime(){
        router.replace({
            uri: 'pages/editAlarm/editAlarm',
            params: {
                dataWrapper: this.dataWrapper,
                originData: this.originData
            }
        });
    },
    setRepeat(){
        router.replace({
            uri: 'pages/editRepeat/editRepeat',
            params: {
                dataWrapper: this.dataWrapper,
                originData: this.originData
            }
        });
    },
    deleteAlarm(){
        this.dataWrapper.mode = "deleteAlarm";
        router.replace({
            uri: 'pages/deleteAlarm/deleteAlarm',
            params: {
                dataWrapper: this.dataWrapper,
                originData: this.originData
            }
        });
    }
}
