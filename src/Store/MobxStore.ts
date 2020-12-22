import {observable} from "mobx";

class MobxStore {
    @observable public some: boolean = false
}

const MoStore = new MobxStore();
export default MoStore