import { FC, useState } from "react"

const ProfileForm: FC<ProfileFormProps> = ({ setModal, profile, setProfile }) => {

    const [tab, setTab] = useState<number>(0)

    const handleNext = () => {
        if (profile.name != "" && profile.email != "" && profile.phone != 0) {
            setTab((prev) => prev + 1)
        }
        else {
            alert("Fields are empty")
        }
    }

    const handleDone = () => {
        if (profile.name != "" && profile.email != "" && profile.phone != 0) {
            setModal(false)
        }
        else {
            alert("Required fields are empty")
        }
    }

    return (
        <div>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="flex justify-between bg-gray-50 px-4 py-4">
                                <div>
                                    <text className="font-semibold">Add New Profile</text>
                                </div>
                                <div>
                                    <button onClick={() => setModal(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24">
                                            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white px-4 pb-4 pt-2 sm:px-6 sm:pb-4">
                                <div className="mb-4 ">
                                    <ul className="flex -mb-px justify-around text-sm font-medium text-center ">
                                        <li className="" >
                                            <button className={`inline-block p-4 border-b-2 rounded-t-lg ${tab === 0
                                                ? 'text-blue-500 border-blue-500'
                                                : 'hover:text-gray-500 hover:border-gray-300 focus:text-blue-500 focus:border-blue-500'
                                                }`} onClick={() => setTab(0)}>Basic</button>
                                        </li>
                                        <li className="" >
                                            <button className={`inline-block p-4 border-b-2 rounded-t-lg ${tab === 1
                                                    ? 'text-blue-500 border-blue-500'
                                                    : 'hover:text-gray-500 hover:border-gray-300 focus:text-blue-500 focus:border-blue-500'
                                                }`} onClick={() => setTab(1)}>Contact</button>
                                        </li>
                                    </ul>
                                </div>
                                <div id="myTabContent">
                                    {
                                        tab === 0 && (
                                            <div className="p-1 rounded-lg" >
                                                <form className="space-y-5" action="#" method="POST">
                                                    <div>
                                                        <label className="block text-sm font-medium leading-6 text-gray-900">Enter Name *</label>
                                                        <div className="mt-1">
                                                            <input id="name" name="name" value={profile.name} type="text" required placeholder="Eg. John Doe" onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))} className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium leading-6 text-gray-900">Enter Email *</label>
                                                        <div className="mt-1">
                                                            <input id="email" name="email" type="email" value={profile.email} required placeholder="Eg. John@xyz.com" onChange={(e) => setProfile((prev) => ({ ...prev, email: e.target.value }))} className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium leading-6 text-gray-900">Enter Phone *</label>
                                                        <div className="mt-1">
                                                            <input id="phone" name="phone" type="number" value={profile.phone} required placeholder="Eg.  9123456789" onChange={(e) => setProfile((prev) => ({ ...prev, phone: parseInt(e.target.value) }))} className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )
                                    }
                                    {
                                        tab === 1 && (
                                            <div className="p-1 rounded-lg " >
                                                <form className="space-y-6" action="#" method="POST">
                                                    <div>
                                                        <label className="block text-sm font-medium leading-6 text-gray-900">Instagram Link <text className="text-gray-400">(Optional)</text></label>
                                                        <div className="mt-1">
                                                            <input id="instagram" name="instagram" type="text" value={profile.instagram} required placeholder="Eg...@username" onChange={(e) => setProfile((prev) => ({ ...prev, instagram: e.target.value }))} className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium leading-6 text-gray-900">Youtube Link <text className="text-gray-400">(Optional)</text></label>
                                                        <div className="mt-1">
                                                            <input id="youtube" name="youtube" type="text" value={profile.youtube} required placeholder="Eg...@username" onChange={(e) => setProfile((prev) => ({ ...prev, youtube: e.target.value }))} className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )
                                    }
                                </div>

                            </div>
                            <div className="bg-gray-50 mt-3 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                {
                                    tab === 0 && (
                                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto" onClick={handleNext}>Next</button>
                                    )
                                }
                                {
                                    tab === 1 && (
                                        <div className="gap-4 sm:flex sm:px-6">
                                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setTab((prev) => prev - 1)}>Back</button>
                                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto" onClick={handleDone}>Done</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileForm