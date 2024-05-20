export type Link = {
    id: number,
    link: string,
    hasLists: boolean,
    list?: {
        id: number,
        listName: string,
        listIcon?: string
    }[]
}[];


export const links: Link = [
    {
        id: 1,
        link: "Features",
        hasLists: true,
        list: [
            {
                id: 1,
                listName: "todo list",
                listIcon: "@/assets/icon-todo.svg"
            },
            {
                id: 2,
                listName: "calender",
                listIcon: "@/assets/icon-calender.svg"
            },
            {
                id: 3,
                listName: "reminders",
                listIcon: "@/assets/icon-reminders.svg"
            },
            {
                id: 4,
                listName: "planning",
                listIcon: "@/assets/icon-planning.svg"
            },
        ]
    },
    {
        id: 2,
        link: "Company",
        hasLists: true,
        list: [
            {
                id: 1,
                listName: "History",
            },
            {
                id: 2,
                listName: "Our team",
            },
            {
                id: 3,
                listName: "blog",
            },

        ]
    },
    {
        id: 3,
        link: "careers",
        hasLists: false,
    },
    {
        id: 4,
        link: "About",
        hasLists: false,
    }
]