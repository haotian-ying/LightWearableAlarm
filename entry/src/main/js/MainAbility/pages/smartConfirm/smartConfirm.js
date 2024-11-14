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
    },
    onInit() {

    },
    cancel(){
        router.replace({
            uri: 'pages/time/time',
            params: {
                dataWrapper: this.dataWrapper,
                originData: this.originData
            }
        });
    },
    confirm(){
        router.replace({
            uri: 'pages/time/time',
            params: {
                dataWrapper: this.dataWrapper,
                originData: this.originData
            }
        });
    }
}
