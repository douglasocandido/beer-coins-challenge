export default class FormatDate {

    format(operationDate: string) {
        const formatedDate = new Date(operationDate)
        return `${this.getFormatedDay(formatedDate)}/${this.getFormatedMonth(formatedDate)}/${formatedDate.getFullYear()} ${this.getFormatedHours(formatedDate)}:${this.getFormatedMinutes(formatedDate)}`
    }
    
    getFormatedDay(date: Date) {
        return `0${date.getDate()}`.slice(-2)
    }

    getFormatedMonth(date: Date) {
        return `0${date.getMonth()+1}`.slice(-2)
    }

    getFormatedHours(date: Date) {
        return `0${date.getHours()}`.slice(-2)
    }

    getFormatedMinutes(date: Date) {
        return `0${date.getMinutes()}`.slice(-2)
    }
  
}