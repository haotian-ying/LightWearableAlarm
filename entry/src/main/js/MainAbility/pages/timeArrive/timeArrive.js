import router from '@system.router'
export default {
    data: {
        time:"07:00",
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
    postpone() {
        router.replace({
            uri: 'pages/time/time',
            params: {
                dataWrapper: this.dataWrapper,
                originData: this.originData
            }
        });
    },
    cancel() {
        router.replace({
            uri: 'pages/time/time',
            params: {
                dataWrapper: this.dataWrapper,
                originData: this.originData
            }
        });
    }
}
