export class SiteModel{
    constructor(mac,hostname,serial,mgmt_ip,fw_version,operational_status,ntp_server,remark,device_model_id,device_model_name,username)
    {
        this.mac = mac
        this.hostname = hostname
        this.serial = serial
        this.mgmt_ip = mgmt_ip
        this.fw_version = fw_version
        this.operational_status = operational_status
        this.ntp_server = ntp_server
        this.remark = remark
        this.device_model_id = device_model_id
        this.device_model_name = device_model_name
        this.created_on= new Date().toDateString()
        this.updated_on= new Date().toDateString()
        this.created_by= username
        this.updated_by= username
    }
}
