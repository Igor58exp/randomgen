export module Math_vec {

    function setAngle(obj){
        let length = this.getLength(obj);
        obj.x = Math.cos(length) * length;
        obj.y = Math.sin(length) * length;
    };

    function getAngle(obj){
        return Math.atan2(obj.y, obj.x);
    };

    function setLength(obj){
        let angle = this.getAngle(obj);
        obj.x = Math.cos(angle) * length;
        obj.y = Math.sin(angle) * length;
    };

    function getLength(obj){
        return Math.sqrt(obj.x * obj.x + obj.y * obj.y);
    };

};