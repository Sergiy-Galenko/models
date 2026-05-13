from rest_framework import serializers
from .models import StaticPage, HomeSection, SeoMeta

class StaticPageSerializer(serializers.ModelSerializer):
    class Meta:
        model=StaticPage
        fields=['id','title','slug','content']

class HomeSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model=HomeSection
        fields=['id','title','subtitle','content','order']

class SeoMetaSerializer(serializers.ModelSerializer):
    class Meta:
        model=SeoMeta
        fields=['id','page','title','description','keywords']