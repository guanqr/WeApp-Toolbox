import requests
import json

openId = 'o2XBq5FtxdiSDfJRpxfVi74QhQSQ'
tempName = 'GuanQirui'
tempTemp = '36.5'
tempLct = '杭州'
tempDate = '2020-07-12'

def access_token():
    """"
       获取access_token
    """
    APPID = '' #小程序ID
    APPSECRET = '' #小程序秘钥
    WECHAT_URL = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + APPID + '&secret=' + APPSECRET
    response = requests.get(WECHAT_URL)
    result = response.json()
    return result["access_token"] #将返回值解析获取access_token

def databaseAdd(access_token):
    """"
    新建记录并对内容进行定义
    collection_name 集合的名称
    """
    url = 'https://api.weixin.qq.com/tcb/databaseadd?access_token=' + access_token
    
    query = 'db.collection("temp").add({data:{_openid:"'+ openId +'",name:"'+ tempName +'",temperature:"'+ tempTemp +'",location: "'+ tempLct +'",date:"'+ tempDate +'"}})'
    
    data = {
        "env": "toolbox-01",
        "query": query
    }
    
    response = requests.post(url, data=json.dumps(data))
    result = response.json()
    print(result)

if __name__ == '__main__':
    accessToken = access_token()
    databaseAdd(accessToken)