
class Task {
    static count = 0

    constructor(content) {
        this.id = ++this.constructor.count
        this.content = content
        this.isDone = false
    }

    setTask(content) {
        this.content = content
    }

    getId() {
        return this.id
    }

    getContent() {
        return this.content
    }
    setIsDone(isDone){
        this.isDone = isDone
    }
    getIsDone() {
        return this.isDone;
    }

    getTaskInfo() {
        return {
            id: this.id,
            content: this.getContent(),
            isDone: this.getIsDone()
        }
    }
        hasContent(content) {
        return this.content.toLowerCase().includes(content.toLowerCase());
    }

}


// ////////
// export class Task {
//     constructor(title, description) {
//         // this.id = Task.incrementId();
//         // this.id = new Date().getTime() + new Date().getTime();
//         this.id = new Date().getMilliseconds() + Math.floor(Math.random() * 1000);
//         this.title = title;
//         this.description = description;
//         this.isDone = false;
//     }
//
//     static incrementId() {
//         if (!this.lastedId) this.lastedId = 1;
//         else this.lastedId++;
//         return this.lastedId;
//     }
//
//     setTitle(title) {
//         this.title = title;
//     }
//
//     setDescription(description) {
//         this.description = description;
//     }
//
//     setIsDone(isDone) {
//         this.isDone = isDone;
//     }
//
//     getId() {
//         return this.id;
//     }
//
//     getTitle() {
//         return this.title;
//     }
//
//     getDescription() {
//         return this.description;
//     }
//
//     getIsDone() {
//         return this.isDone;
//     }
//
//     getInfoOfTask() {
//         return {
//             id: this.getId(),
//             title: this.getTitle(),
//             description: this.getDescription(),
//             isDone: this.getIsDone(),
//         };
//     }
//
//     hasTitle(title) {
//         return this.title.toLowerCase().includes(title.toLowerCase());
//     }
//
//     hastDescription(description) {
//         return this.description.toLowerCase().includes(description.toLowerCase());
//     }
// }
