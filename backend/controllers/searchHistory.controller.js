import { User } from '../models/user.model.js';

export const getSearchHistory = async (request, response) => {
  try {
    response
      .status(200)
      .json({ success: true, content: request.user.searchHistory });
  } catch (error) {
    console.error('Error in getSearchHistory:', error);
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};

export const removeItemFromSearchHistory = async (request, response) => {
  const id = parseInt(request.params.id);

  try {
    await User.findByIdAndUpdate(request.user._id, {
      $pull: {
        searchHistory: { id },
      },
    });

    response.status(200).json({
      success: true,
      message: 'Item removed successfully from search history.',
    });
  } catch (error) {
    console.error('Error in removeItemFromSearchHistory:', error);
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};
