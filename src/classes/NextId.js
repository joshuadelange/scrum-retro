export default class NextId {

  constructor(data) {
    const current_ids = this.get_current_ids(data);
    const highest_number = this.get_highest_number(current_ids);
    this.id = this.create_next_id(highest_number);
  }

  get_current_ids(data) {
  	return data.map(item => item.id);
  }

  get_highest_number(numbers) {
  	return Math.max(...numbers);
  }

  create_next_id(highest_number) {
  	return highest_number + 1;
  }

}