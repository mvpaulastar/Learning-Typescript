export class TaskListItem {
    constructor( private container: HTMLUListElement){}

    render( detail: string ){
        let li = document.createElement( 'li' );
        let p = document.createElement( 'p' );
        p.innerText = detail;
        li.append(p);
    }
}