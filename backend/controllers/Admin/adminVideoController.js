const asyncHandler = require("express-async-handler");
const adminVideosModel = require("../../models/Admin/AdminVideoModel.js");

const getAllAdminVideos = asyncHandler(async (req, res) => {
    try {
        const AdminVideos = await adminVideosModel.find({});
        res.status(200).json({
            success: true,
            AdminVideosData: AdminVideos
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

const createAdminVideo = asyncHandler(async (req, res) => {

    const { video, description, title } = req.body;

    if (!video || !description || !title) {
        return res.status(402).json({ message: "Please fill all fileds" });
    }
    try {
        const adminVideo = new adminVideosModel({ video, description,title });
        await adminVideo.save();
        res.status(201).json({
            success: true,
            message: "created successfully",
            adminVideoData: adminVideo
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

const deleteAdminVideo = asyncHandler(async (req, res) => {
    const { _id } = req.params;

    try {
        const adminVideo = await adminVideosModel.findByIdAndDelete(_id)
        res.status(200).json({
            success: true,
            message: "Admin Video deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = { createAdminVideo, getAllAdminVideos, deleteAdminVideo };