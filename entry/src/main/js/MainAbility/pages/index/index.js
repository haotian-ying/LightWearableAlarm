import router from '@system.router'
export default {
    data: {
        title: ""
    },
    onInit() {

    },
    btnClick(){
        router.replace({
            uri: 'pages/time/time'
        })
    }
}
