## 图片社区异步接口

### 获取取用户信息
> 页面首次加载、点赞操作、删除操作、发图操作会调用此接口获取用户信息
> 获取到的信息会保存到会话（sessionStorage）中，10分钟之内的操作会从会话中去用户信息

```
{
    uid: 12312, // 已登录返回用户uid，未登录为0
    info: { // 登录用户信息，为登录为null
    	avatar: '/static/images/avatar.png', // 用户头像
    	link: '#个人中心', // 个人中心连接
    	photoLink: '#图片列表', // 图片列表连接
    	username: 'luzhenxing'
    }
}
```

### 图片社区首页
> 首页banner信息，tag信息

```
{
    banner: { // 首屏背景
        style: 'style1', // [style1, style2, style3] 首屏背景图三种分类
        title: '世界这一刻', // 标题
        text: '随时随地，每分每秒<br>就现在<br>随手一拍！' // 话术
    },
    tagsList: [{ // 背景tag列表，可循环
        name: '布宜诺斯艾利斯', // tag名字
        link: '#', // 链接
        img: '/static/images/temp/temp-180x180.jpg' // 图片src
    }, {
        name: '纽约',
        link: '#',
        img: '/static/images/temp/temp-180x180.jpg'
    }, ...]
}
```

### 图片瀑布流信息
> 首页瀑布流，目的地图片列表，**每次加载20条信息**
> 参数：page:1 取第几页信息, type: hot(最热) | new(最新) ｜ place(目的地)

```
{
	loaded: false, // 是否可继续加载
	piclist: [{	// 图片卡片信息, 可循环
		id: 12312312, // 卡片id
		link: '#', // 卡片链接
		img: `/static/images/temp/imglist${i}.jpg`, // 图片src
		like: false, // 点赞，true（已赞），false(未赞or未登录)
		like_num: 98, // 点赞数量
		position: '美国纽约', // 定位
		text: '博物馆燃到爆', // 文字描述
		userAvatar: '/static/images/avatar.png', // 作者用户头像
		userName: 'suosuolian', // 作者用户名
		date: '刚刚' // 发布时间
	}, ...]
}
```

### 点赞接口
> 图片列表点赞功能
> 参数：like：1 点赞 ｜ 0 取消点赞
> 直接返回成功or失败信息

### 赞过的人
```
[{
	uid: 123,
	link: '#', // 个人图片列表链接
	img: '/static/images/avatar.png', // 头像
	userName: '哆啦A梦' // 用户名
}, {
	uid: 123,
	link: '#',
	img: '/static/images/avatar.png',
	userName: '哆啦A梦'
}, ...]
```

### 图片详情页
```
{
    userinfo: { // 用户信息部分
        username: '嗦嗦连suosuolian',
        photoLink: '##图片列表',
        link: '##个人中心',
        avatar: '/static/images/avatar.png'
    },
    picinfo: { // 图片信息
        picid: 123123,
        src: '/static/images/temp/photo.jpg',
        text: '暴走了几天之后，终于终于可以歇歇脚了。码头没有想象的那么忙碌，游客更是少，好惬意呀~还好出门前机智的做了防晒，不怕回家变煤球……',
        tags: '地球这一刻',
        publishDate: '1天前发布',
        position: '美国纽约'
    },
    likeinfo: { // 喜欢用户列表
        total: 23, // 喜欢图片总数
        like: true, // 当前用户是否喜欢这个图片
        likelist: [{ // 喜欢用户列表，不必全部输出，最多输出8个信息，前端以...省略
            uid: 123,
            avatar: '/static/images/avatar.png',
            link: '#1'
        }, {
            uid: 123,
            avatar: '/static/images/avatar.png',
            link: '#2'
        }, ...]
    }
}
```

### 评论列表
> 分页输出

```
{
    total: 231, // 图片详情总评论数
    list: [{ // 评论列表，可循环
        uid: 1,
        username: '嗦嗦连suosuolian',
        avatar: '/static/images/avatar.png',
        link: '#嗦嗦连suosuolian',
        publishDate: '2分钟前',
        reply: { // 回复的用户信息，页面上体现 xxx 回复了 xxx
            uid: 1234,
            username: 'luzhenxing',
            link: '#luzhenxing'
        },
        text: '好美的海！一看就没有pm2.5'
    }, {
        uid: 2,
        username: '嗦嗦连suosuolian',
        avatar: '/static/images/avatar.png',
        link: '#',
        publishDate: '22分钟前',
        text: '好美的海！一看就没有pm2.5'
    }, {
        uid: 3,
        username: '嗦嗦连suosuolian',
        avatar: '/static/images/avatar.png',
        link: '#',
        publishDate: '2分钟前',
        text: '好美的海！一看就没有pm2.5'
    }],
    loaded: false // 是否加载完毕
}
```
### 发布评论
> 参数：commentText(评论内容)，replyUid(如果是回复则有回复的用户uid)

### 删除图片
> 参数：photoId(图片id)

### 个人图片列表
```
{
    userinfo: {
        uid: 1231, // 用户uid
        username: '嗦嗦连suosuolian',
        photoLink: '##图片列表',
        link: '##个人中心',
        avatar: '/static/images/avatar.png'
    },
    list: [{
        date: '2016-8-20', // 图片发布日期，前端根据date分日期输出list
        picid: 123,
        link: '#',
        img: '/static/images/temp/imglist1.jpg',
        like: false,
        like_num: 18,
        position: '美国纽约'
    }, {
        date: '2016-8-20',
        picid: 123,
        link: '#',
        img: '/static/images/temp/imglist1.jpg',
        like: false,
        like_num: 38,
        position: '美国纽约'
    }, {
        date: '2016-8-12',
        picid: 123,
        link: '#',
        img: '/static/images/temp/imglist1.jpg',
        like: false,
        like_num: 48,
        position: '美国纽约'
    }, {
        date: '2016-8-22',
        picid: 123,
        link: '#',
        img: '/static/images/temp/imglist1.jpg',
        like: false,
        like_num: 58,
        position: '美国纽约'
    }],
    loaded: false
}
```
