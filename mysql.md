## 数据库表结构
这里只列出了api用到的表字段，可自行扩展，提供参考
### user表

| 字段 | 数据类型 | 说明 |
| --- | --- | --- |
| id | int | 主键，自增 |
| account | varchar | 用户名，非空 |
| passWord | varchar | 密码，非空 |
| nickName | varchar | 昵称 |
| avatar | varchar | 头像地址 |
| articleNum | int | 文章数 |
| supportNum | int | 获赞数(总) |
| collectionNum | int | 被收藏数(总) |

### article表

| 字段 | 数据类型 | 说明 |
| --- | --- | --- |
| bid | int | 主键，自增 |
| userId | int | 作者ID |
| title | varchar | 标题 |
| type | varchar | 类型 |
| avatar | varchar | 作者头像 |
| timeStamp | varchar | 发布时间戳 |
| content | varchar | 内容 |
| coverImg | varchar | 封面图 |
| supportNum | int | 点赞数 |
| collectNum | int | 收藏数 |

