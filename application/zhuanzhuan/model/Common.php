<?php
/**
 * 公共model，定义公共访问方法及表名
 * User: 李祎
 * Date: 2019/5/30
 * Time: 15:00
 */
namespace app\zhuanzhuan\model;

use think\Model;
use think\Db;
class Common extends Model
{
    #########################数据表#########################################
    const WITHDRAW = 'cbd_earn_withdraw';
    const FINANCE = 'cbd_finance';
    const ACCOUNT = 'cbd_earn_account';

    /**
     * 构造器
     * BargainGoodsModel constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 返回数据模型
     * @param $tableName
     * @return mixed|\Model|Model
     */
    public function dataModel($tableName)
    {
        return Db::table($tableName);
    }

    /**
     * get info from db
     * @param $type
     * @param $Model
     * @param $field
     * @param $alias
     * @param $join
     * @param $where
     * @param $group
     * @param $having
     * @param $order
     * @param $limit
     * @return mixed：查询结果（二维数组）
     */
    public function read_data($type, $Model, $field, $alias = '', $join = '', $where = '', $group = '', $having = '', $order = '', $limit = '')
    {
        switch ($type) {
            case 1://单表查询
                $result = $Model->field($field)->where($where)->group($group)->having($having)->order($order)->limit($limit)->select();
                break;
            case 2://多表查询
                $result = $Model->alias($alias)->field($field)->join($join)->where($where)->group($group)->having($having)->order($order)->limit($limit)->select();
                break;
        }
        return $result;
    }

    /**
     * insert a data into db
     * @param $model
     * @param $data
     * @return mixed：添加数据的主键
     */
    public function insert_data_one($model, $data)
    {
        return $model->insertGetId($data);
    }

    /**
     * insert Multiple data into db
     * @param $model
     * @param $data
     * @return mixed：添加成功的条数
     */
    public function insert_lot($model, $data)
    {
        return $model->insertAll($data);
    }

    /**
     * updata data into db
     * @param $type
     * @param $model
     * @param $where
     * @param $data
     * @return mixed：受影响的条数，无修改则返回0
     */
    public function update_data($type, $model, $where, $data)
    {
        switch ($type) {
            case 1://普通批量更新
                $updata = $model->where($where)->update($data);
                break;
            case 2://字段自增
                $updata = $model->where($where)->setInc($data['key'], $data['num']);
                break;
            case 3://字段自减
                $updata = $model->where($where)->setDec($data['key'], $data['num']);
                break;
            default:
                $updata = $model->where($where)->update($data);
                break;
        }
        return $updata;
    }

    /**
     * delete data from db
     * @param $model
     * @param $where
     * @return mixed：受影响条数，无删除返回0
     */
    public function delete_data($model, $where)
    {
        return $model->where($where)->delete();
    }
}