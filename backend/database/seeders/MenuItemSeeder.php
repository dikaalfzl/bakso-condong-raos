<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\MenuItem;
use Illuminate\Support\Facades\File;

class MenuItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(base_path('../src/data/menu.json'));
        $data = json_decode($json);

        foreach ($data->items as $item) {
            MenuItem::create([
                'name' => $item->name,
                'description' => $item->desc,
                'price' => $item->price,
                'category' => $item->category,
                'image' => $item->img,
            ]);
        }
    }
}
