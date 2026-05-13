from rest_framework import serializers
from .models import ContactRequest, NewsletterSubscriber

class ContactRequestSerializer(serializers.ModelSerializer):
    class Mets:
        model=ContactRequest
        fields=['id','name','email','message','created_at']
        read_only_fields=['id','created_at']

class NewsletterSubsriberSerializer(serializers.ModelSerializer):
    class Meta:
        model=NewsletterSubscriber
        fields=['id','email']
        read_only_fields=['id']