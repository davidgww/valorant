export default {
    // 时间戳转换为日期格式
    filter1(date) {
        var date = new Date(date * 1000); //如果date为10位不需要乘1000
        var Y = (date.getFullYear()) + '/';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        return h + m;
    },
    filter2(value) {
        var tempArr = value.split(',');
        return tempArr[0];
    },
    filter3(value) {
        var tempArr = value.split('-');
        if(tempArr[0]!= ''){
            return tempArr[0];
        }else{
            return "~";
        }
    },
    filter4(date) {
        var date = new Date(date * 1000); //如果date为10位不需要乘1000
        var Y = (date.getFullYear()) + '/';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        return Y + M + D + h + m;
    },
    
    filter5(value) {
        var tempArr = value.split('-');
        if(tempArr[1]!= ''){
            return tempArr[1];
        }else{
            return "~";
        }
    },
    filter6(date) {
        var date = new Date(date * 1000); //如果date为10位不需要乘1000
        var Y = (date.getFullYear()) + '/';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        return  M + D ;
    },
}