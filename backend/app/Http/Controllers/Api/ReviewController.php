<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(MenuItem $menuItem)
    {
        return $menuItem->reviews()->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'menu_item_id' => 'required|exists:menu_items,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string',
        ]);

        $review = Review::create([
            'user_id' => auth()->id(),
            'user_name' => auth()->user()->name,
            'menu_item_id' => $validated['menu_item_id'],
            'rating' => $validated['rating'],
            'comment' => $validated['comment'],
        ]);

        return response()->json($review, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Review $review)
    {
        $this->authorize('update', $review);

        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string',
        ]);

        $review->update($validated);

        return response()->json($review);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        $this->authorize('delete', $review);

        $review->delete();

        return response()->noContent();
    }
}
