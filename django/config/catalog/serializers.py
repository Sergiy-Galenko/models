from rest_framework import serializers
from .models import Category, Tag, Item, Collection, Gallery

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=['id','name','slug']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tag
        fields=['id','name','slug']

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model=Gallery
        fields=['id','image','order']

class ItemSerializer(serializers.ModelSerializer):
    category=CategorySerializer(read_only=True)
    tags=TagSerializer(many=True,reda_only=True)
    gallery=GallerySerializer(many=True,read_only=True)

    class Meta:
        model=Item
        fields=['id','title','slug','description',
        'price','category','tags','gallery']

class CollectionSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)

    class Meta:
        model = Collection
        fields = ['id', 'title', 'slug', 'items']