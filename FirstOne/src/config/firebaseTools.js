import firebase from "firebase";

class FirebaseDatabase {

    static firebaseInstanse = null;
    static getFirebaseInstanse() {
        if(!this.firebaseInstanse) {
           /* let config = {
                apiKey: "AIzaSyB5amoAeLdXaj8A1jr5NwCc9cutqo6TNPE",
                authDomain: "demo1-4b458.firebaseapp.com",
                databaseURL: "https://demo1-4b458.firebaseio.com",
                projectId: "demo1-4b458",
                storageBucket: "demo1-4b458.appspot.com",
                messagingSenderId: "97405644764"
            };
            */
            //宋斌斌的
           var config = {
                apiKey: "AIzaSyCQdLaz0SixWOpLTJ749trAuk3MCfsJmGI",
                authDomain: "super-66265.firebaseapp.com",
                databaseURL: "https://super-66265.firebaseio.com",
                projectId: "super-66265",
                storageBucket: "super-66265.appspot.com",
                messagingSenderId: "568939410587"
            };

            this.firebaseInstanse = firebase.initializeApp(config);
        }
        return this.firebaseInstanse;
    }
}



/**
 * firebase工具类
 */
export default class FirebaseUtils {
    static database = FirebaseDatabase.getFirebaseInstanse().database();
    /**
     * 登录类型
     */
    static FIRE_TYPE_LOGIN = "login";

    /**
     * 注册类型
     */
    static FIRE_TYPE_REGISTRATION = "registration";
    static FIRE_TYPE_HOT_PRODUCTS = "hot_products";
    static FIRE_TYPE_PURCHASE = "purchase";
    static FIRE_TYPE_PARTNER_ACCESS = "partner_access";
    static FIRE_TYPE_USAGE_STATISTICS = "usage_statistics";
    static FIRE_TYPE_ACTIVE_USERS = "active_users";

    /**
     *  
        data = {
           device_id, //设备id  
           user_id,  //用户id 或者code    ：require 必填项
           sub_type,  //子类型
           country_code, //国家code   
           create_time,//创建时间
           long_time, //时间毫秒值
           amount, //金额
           others
        }
     * 
     * 
     */


    static getDatabase() {
        return this.database();
    }

    /**
     * 像数据库中添加随机叶子节点
     * @param {*} category 大类
     * @param {*} child 小类
     */
    static addKeyDateByType(category, child = "", objData = 1) {
        if(child.length > 0) {
            category = category+"/"+child;
        }
        let nKey = this.database.ref(category).push().key;
        let obj = Object.create(null);
        obj[nKey] = objData;
        this.database.ref(category).update(obj);
    }
    /**
     * 更新叶子节点
     * @param {*} path 
     * @param {*} data 
     */
    static updateDataByPath(path, data = {}) {
        this.database.ref(path).update(data);
    }
    /**
     * 新增叶子节点
     * @param {*} path 
     * @param {*} data 
     */
    static writeDataByPath(path = "", data = {}) {
        this.database.ref(path).set(data);
    }

    /**
     * 更新相应节点的count 累加数
     * @param {*} path 
     */
    static transactionDataCount(path = "") {
        let postRef = this.database.ref(path);
        postRef.transaction((post) =>{
            if(post) {
                post ++;
            } else {
                post = 1;
            }
            return post;
        })
    }

    /**
     * 登录数据
     * @param {*} data 
     */
    static recordLogin(data = {}) {
        this.addKeyDateByType(this.FIRE_TYPE_LOGIN,"",data);
    }
    /**
     * 注册数据
     * @param {*} data 
     */
    static recordRegistration(data = {}) {
        this.addKeyDateByType(this.FIRE_TYPE_REGISTRATION,"",data);
    }

    /**
     * 热销商品数据
     * @param {*} data 
     */
    static recordHotProducts(data = {}) {
        this.addKeyDateByType(this.FIRE_TYPE_HOT_PRODUCTS,"",data);
    }

    /**
     * 分析
     * @param {*} data 
     */
    static recordUsageStatistics(data = {}) {
        this.addKeyDateByType(this.FIRE_TYPE_USAGE_STATISTICS,"",data);
    }

    /**
     * 购买数据
     * @param {*} data 
     */
    static recordPurchase(data = {}) {
        this.addKeyDateByType(this.FIRE_TYPE_PURCHASE,"",data);
    }

    /**
     * 飞线数据
     * @param {*} data 
     */
    static recordPartnerAccess(data = {}) {
        this.addKeyDateByType(this.FIRE_TYPE_PARTNER_ACCESS,"",data);
    }

    /**
     * 在线数据
     * @param {*} data 
     */
    static recordActiveUsers(data = { user_id :-1 }) {
        let path = this.FIRE_TYPE_ACTIVE_USERS+"/"+data.user_id;
        this.writeDataByPath(path,data);
    }

    static recordActionLogByCount(data = {user_id:-1}) {
        this.addKeyDateByType("root/"+data.user_id, "", data);
    }

}